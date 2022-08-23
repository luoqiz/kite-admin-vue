<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { SysTenantDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<SysTenantDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<SysTenantDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: SysTenantDataModel) {
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
      label: t("page.common.system.tenant.column.id"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.id_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.id_placeholder")
      }
    },
    {
      name: "name",
      type: "input",
      label: t("page.common.system.tenant.column.name"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.name_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.name_placeholder")
      }
    },
    {
      name: "contactUserId",
      type: "input",
      label: t("page.common.system.tenant.column.contactUserId"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.contactUserId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.contactUserId_placeholder")
      }
    },
    {
      name: "contactName",
      type: "input",
      label: t("page.common.system.tenant.column.contactName"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.contactName_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.contactName_placeholder")
      }
    },
    {
      name: "contactMobile",
      type: "input",
      label: t("page.common.system.tenant.column.contactMobile"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.contactMobile_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.contactMobile_placeholder")
      }
    },
    {
      name: "status",
      type: "input",
      label: t("page.common.system.tenant.column.status"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.status_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.status_placeholder")
      }
    },
    {
      name: "domain",
      type: "input",
      label: t("page.common.system.tenant.column.domain"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.domain_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.domain_placeholder")
      }
    },
    {
      name: "packageId",
      type: "input",
      label: t("page.common.system.tenant.column.packageId"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.packageId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.packageId_placeholder")
      }
    },
    {
      name: "expireTime",
      type: "input",
      label: t("page.common.system.tenant.column.expireTime"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.expireTime_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.expireTime_placeholder")
      }
    },
    {
      name: "accountCount",
      type: "input",
      label: t("page.common.system.tenant.column.accountCount"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.accountCount_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.accountCount_placeholder")
      }
    },
    {
      name: "creator",
      type: "input",
      label: t("page.common.system.tenant.column.creator"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.creator_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.creator_placeholder")
      }
    },
    {
      name: "createTime",
      type: "input",
      label: t("page.common.system.tenant.column.createTime"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.createTime_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.createTime_placeholder")
      }
    },
    {
      name: "updater",
      type: "input",
      label: t("page.common.system.tenant.column.updater"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.updater_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.updater_placeholder")
      }
    },
    {
      name: "updateTime",
      type: "input",
      label: t("page.common.system.tenant.column.updateTime"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.updateTime_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.updateTime_placeholder")
      }
    },
    {
      name: "deleted",
      type: "input",
      label: t("page.common.system.tenant.column.deleted"),
      rules: [
        {
          required: true,
          message: t("page.common.system.tenant.column.deleted_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.tenant.column.deleted_placeholder")
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
