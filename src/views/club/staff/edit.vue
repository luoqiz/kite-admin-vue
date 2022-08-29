<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { ClubStaffDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<ClubStaffDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<ClubStaffDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: ClubStaffDataModel) {
  model.value = Object.assign({}, record);
  visible.value = true;
}

function cancel() {
  ruleFormRef.value?.clearValidate();
  visible.value = false;
}

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (isEdit.value) {
        handleEdit(model.value).then(() => {
          useMessage("success", t("page.common.notice.edit_success"));
          emit("close");
          visible.value = false;
        });
      } else {
        handleAdd(model.value).then(() => {
          useMessage("success", t("page.common.notice.add_success"));
          emit("close");
          visible.value = false;
        });
      }
    }
  });
}

const options = computed(() => {
  return [
    {
      name: "clubId",
      tagName: "el-input",
      label: t("page.common.club.staff.package.column.clubId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.staff.package.column.clubId_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.staff.package.column.clubId_placeholder")
      }
    },
    {
      name: "userId",
      tagName: "el-input",
      label: t("page.common.club.staff.package.column.userId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.staff.package.column.userId_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.staff.package.column.userId_placeholder")
      }
    },
    {
      name: "categories",
      type: "input",
      label: t("page.common.club.staff.package.column.categories"),
      rules: [
        {
          required: true,
          message: t("page.common.club.staff.package.column.categories_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.staff.package.column.categories_placeholder")
      }
    },
    {
      name: "auditState",
      type: "input",
      label: t("page.common.club.staff.package.column.auditState"),
      rules: [
        {
          required: true,
          message: t("page.common.club.staff.package.column.auditState_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.staff.package.column.auditState_placeholder")
      }
    }
  ];
});

defineExpose({
  edit,
  title: title
});
</script>
<template>
  <el-drawer v-model="visible" :width="dialogWidth" :title="title" @close="cancel">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ t("page.common.btn.cancel") }}</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">{{
          t("page.common.btn.confirm")
        }}</el-button>
      </span>
    </template>
    <c-form ref="ruleFormRef" v-model:value="model" label-width="80px" :options="options"> </c-form>
  </el-drawer>
</template>

<style scoped></style>
