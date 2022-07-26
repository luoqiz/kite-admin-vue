<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SysUserDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<SysUserDataModel>>({});

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
  console.log(formEl?.$data);
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      useMessage("success", t("page.common.notice.submit_success"));
      emit("close");
      visible.value = false;
    }
  });
}

const options = computed(() => {
  return [
    {
      name: "username",
      type: "input",
      label: t("page.common.system.user.column.username"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },
    {
      name: "nickName",
      type: "input",
      label: t("page.common.system.user.column.nickName"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },
    {
      name: "deptId",
      type: "input",
      label: t("page.common.system.user.column.deptId"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },

    {
      name: "gender",
      tagName: "el-switch",
      label: t("page.common.system.user.column.gender"),
      rules: [
        {
          required: false,
          message: t("page.common.design.article.form.title_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #74d6fe; --el-switch-off-color: #ff8096",
        activeValue: "man",
        activeText: "男",
        inactiveValue: "woman",
        inactiveText: "女"
      }
    },
    {
      name: "phone",
      type: "input",
      label: t("page.common.system.user.column.phone"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },
    {
      name: "email",
      type: "input",
      label: t("page.common.system.user.column.email"),
      rules: [
        {
          required: true,
          message: t("page.common.design.article.form.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 50,
        placeholder: t("page.common.design.article.form.title_placeholder")
      }
    },
    {
      name: "enabled",
      tagName: "el-switch",
      label: t("page.common.system.user.column.enabled"),
      rules: [
        {
          required: false,
          message: t("page.common.design.article.form.content_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "expireTime",
      type: "datePicker",
      label: t("page.common.system.user.column.expireTime"),
      rules: [
        {
          required: false,
          message: t("page.common.design.article.form.content_placeholder")
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
  <el-dialog v-model="visible" :width="dialogWidth" :title="title" @close="cancel">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ t("page.common.btn.cancel") }}</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">{{
          t("page.common.btn.confirm")
        }}</el-button>
      </span>
    </template>
    <c-form ref="ruleFormRef" v-model:value="model" label-width="80px" :options="options" />
  </el-dialog>
</template>

<style scoped></style>
