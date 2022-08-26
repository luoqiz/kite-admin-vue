<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { SysDictDetailDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<SysDictDetailDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<SysDictDetailDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: SysDictDetailDataModel) {
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
      name: "dictId",
      type: "input",
      label: t("page.common.system.dict.detail.package.column.dictId"),
      rules: [
        {
          required: true,
          message: t("page.common.system.dict.detail.package.column.dictId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.dict.detail.package.column.dictId_placeholder")
      }
    },
    {
      name: "label",
      type: "input",
      label: t("page.common.system.dict.detail.package.column.label"),
      rules: [
        {
          required: true,
          message: t("page.common.system.dict.detail.package.column.label_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.dict.detail.package.column.label_placeholder")
      }
    },
    {
      name: "value",
      type: "input",
      label: t("page.common.system.dict.detail.package.column.value"),
      rules: [
        {
          required: true,
          message: t("page.common.system.dict.detail.package.column.value_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.dict.detail.package.column.value_placeholder")
      }
    },
    {
      name: "dictSort",
      type: "input",
      label: t("page.common.system.dict.detail.package.column.dictSort"),
      rules: [
        {
          required: true,
          message: t("page.common.system.dict.detail.package.column.dictSort_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.dict.detail.package.column.dictSort_placeholder")
      }
    },
    {
      name: "tenantId",
      type: "input",
      label: t("page.common.system.dict.detail.package.column.tenantId"),
      rules: [
        {
          required: true,
          message: t("page.common.system.dict.detail.package.column.tenantId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.dict.detail.package.column.tenantId_placeholder")
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
