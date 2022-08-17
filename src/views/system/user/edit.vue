<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { SysUserDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<SysUserDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<SysUserDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: SysUserDataModel) {
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
      name: "username",
      type: "input",
      label: t("page.common.system.user.username"),
      rules: [
        {
          required: true,
          message: t("page.common.system.user.username_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.user.username_placeholder")
      }
    },
    {
      name: "nickName",
      type: "input",
      label: t("page.common.system.user.nickName"),
      rules: [
        {
          required: true,
          message: t("page.common.system.user.nickName_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.user.nickName_placeholder")
      }
    },
    {
      name: "phone",
      type: "input",
      label: t("page.common.system.user.phone"),
      rules: [
        {
          required: true,
          message: t("page.common.system.user.phone_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.user.phone_placeholder")
      }
    },
    {
      name: "email",
      type: "input",
      label: t("page.common.system.user.email"),
      rules: [
        {
          required: true,
          message: t("page.common.system.user.email_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.user.email_placeholder")
      }
    },
    {
      name: "deptId",
      type: "input",
      label: t("page.common.system.user.dept"),
      rules: [
        {
          required: true,
          message: t("page.common.system.user.dept_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.system.user.dept_placeholder")
      }
    },
    {
      name: "gender",
      label: t("page.common.system.user.gender"),
      rules: [
        {
          required: false,
          message: t("page.common.system.user.gender_placeholder")
        }
      ],
      scopedSlot: "gender"
    },
    {
      name: "enabled",
      tagName: "el-switch",
      label: t("page.common.system.user.enabled"),
      rules: [
        {
          required: false,
          message: t("page.common.system.user.enabled_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "nonLocked",
      tagName: "el-switch",
      label: t("page.common.system.user.nonLocked"),
      rules: [
        {
          required: false,
          message: t("page.common.system.user.nonLocked_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "expireTime",
      type: "datePicker",
      label: t("page.common.system.user.expireTime"),
      rules: [
        {
          required: false,
          message: t("page.common.system.user.expireTime_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
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
    <c-form ref="ruleFormRef" v-model:value="model" label-width="80px" :options="options">
      <template #gender>
        <el-radio-group v-model="model.gender" class="ml-4">
          <el-radio label="1" size="large">男</el-radio>
          <el-radio label="2" size="large">女</el-radio>
        </el-radio-group>
      </template>
    </c-form>
  </el-drawer>
</template>

<style scoped></style>
