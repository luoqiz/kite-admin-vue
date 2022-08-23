<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { SysTenantPackageDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<SysTenantPackageDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<SysTenantPackageDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: SysTenantPackageDataModel) {
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
      name: "id",
      type: "input",
      label: t("page.common.system.tenant.package.column.id"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.id_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.id_placeholder")
      }
    },
    {
      name: "name",
      type: "input",
      label: t("page.common.system.tenant.package.column.name"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.name_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.name_placeholder")
      }
    },
    {
      name: "status",
      type: "el-switch",
      label: t("page.common.system.tenant.package.column.status"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.status_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "remark",
      type: "input",
      label: t("page.common.system.tenant.package.column.remark"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.remark_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.remark_placeholder")
      }
    },
    {
      name: "menuIds",
      type: "input",
      label: t("page.common.system.tenant.package.column.menuIds"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.menuIds_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.menuIds_placeholder")
      }
    },
    {
      name: "creator",
      type: "input",
      label: t("page.common.system.tenant.package.column.creator"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.creator_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.creator_placeholder")
      }
    },
    {
      name: "createTime",
      type: "input",
      label: t("page.common.system.tenant.package.column.createTime"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.createTime_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.createTime_placeholder")
      }
    },
    {
      name: "updater",
      type: "input",
      label: t("page.common.system.tenant.package.column.updater"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.updater_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.updater_placeholder")
      }
    },
    {
      name: "updateTime",
      type: "input",
      label: t("page.common.system.tenant.package.column.updateTime"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.updateTime_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.updateTime_placeholder")
      }
    },
    {
      name: "deleted",
      type: "input",
      label: t("page.common.system.tenant.package.column.deleted"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.package.column.deleted_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.package.column.deleted_placeholder")
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
