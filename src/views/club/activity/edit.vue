<script lang="ts" setup>
import { useMessage } from "@/hooks/useMessage";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { ClubActivityDataModel } from "./data";
import { useScreenPixel } from "@/utils/web";
import { FormInstance } from "element-plus";
import { useI18n } from "vue-i18n";
import { url } from "./data.d";

const { t } = useI18n();
const emit = defineEmits(["close"]);

const { handleEdit, handleAdd } = useSimpleList<ClubActivityDataModel>(url) as SimpleListType;

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const title = ref("");
const { gtMd } = useScreenPixel();
const model = ref<Partial<ClubActivityDataModel>>({});
const isEdit = computed<boolean>(() => {
  return model.value.id !== undefined;
});

const dialogWidth = computed(() => {
  return gtMd.value ? "50%" : "80%";
});

function edit(record: ClubActivityDataModel) {
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
      name: "title",
      type: "input",
      label: t("page.common.club.activity.package.column.title"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.title_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.title_placeholder")
      }
    },
    {
      name: "cover",
      type: "input",
      label: t("page.common.club.activity.package.column.cover"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.cover_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.cover_placeholder")
      }
    },
    {
      name: "labelId",
      type: "input",
      label: t("page.common.club.activity.package.column.labelId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.labelId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.labelId_placeholder")
      }
    },
    {
      name: "leaderId",
      type: "input",
      label: t("page.common.club.activity.package.column.leaderId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.leaderId_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.leaderId_placeholder")
      }
    },
    {
      name: "startTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.startTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.startTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.startTime_placeholder")
      }
    },
    {
      name: "endTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.endTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.endTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.endTime_placeholder")
      }
    },
    {
      name: "postingTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.postingTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.postingTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.postingTime_placeholder")
      }
    },
    {
      name: "regisTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.regisTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.regisTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.regisTime_placeholder")
      }
    },
    {
      name: "refundTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.refundTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.refundTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.refundTime_placeholder")
      }
    },
    {
      name: "quota",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.quota"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.quota_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.quota_placeholder")
      }
    },
    {
      name: "publisherId",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.publisherId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.publisherId_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.publisherId_placeholder")
      }
    },
    {
      name: "clubId",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.clubId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.clubId_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.clubId_placeholder")
      }
    },
    {
      name: "provinceCode",
      type: "input",
      label: t("page.common.club.activity.package.column.provinceCode"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.provinceCode_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.provinceCode_placeholder")
      }
    },
    {
      name: "cityCode",
      type: "input",
      label: t("page.common.club.activity.package.column.cityCode"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.cityCode_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.cityCode_placeholder")
      }
    },
    {
      name: "addr",
      type: "input",
      label: t("page.common.club.activity.package.column.addr"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.addr_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.addr_placeholder")
      }
    },
    {
      name: "strengthLevel",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.strengthLevel"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.strengthLevel_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.strengthLevel_placeholder")
      }
    },
    {
      name: "mileage",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.mileage"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.mileage_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.mileage_placeholder")
      }
    },
    {
      name: "rise",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.rise"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.rise_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.rise_placeholder")
      }
    },
    {
      name: "decline",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.decline"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.decline_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.decline_placeholder")
      }
    },
    {
      name: "gatheringTime",
      type: "datePicker",
      label: t("page.common.club.activity.package.column.gatheringTime"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.gatheringTime_placeholder")
        }
      ],
      props: {
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.gatheringTime_placeholder")
      }
    },
    {
      name: "gatheringAddr",
      type: "input",
      label: t("page.common.club.activity.package.column.gatheringAddr"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.gatheringAddr_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.gatheringAddr_placeholder")
      }
    },
    {
      name: "visits",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.visits"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.visits_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.visits_placeholder")
      }
    },
    {
      name: "details",
      type: "input",
      label: t("page.common.club.activity.package.column.details"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.details_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.details_placeholder")
      }
    },
    {
      name: "itinerary",
      type: "input",
      label: t("page.common.club.activity.package.column.itinerary"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.itinerary_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.itinerary_placeholder")
      }
    },
    {
      name: "activityRequirements",
      type: "input",
      label: t("page.common.club.activity.package.column.activityRequirements"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.activityRequirements_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.activityRequirements_placeholder")
      }
    },
    {
      name: "equipment",
      type: "input",
      label: t("page.common.club.activity.package.column.equipment"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.equipment_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.equipment_placeholder")
      }
    },
    {
      name: "notes",
      type: "input",
      label: t("page.common.club.activity.package.column.notes"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.notes_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.notes_placeholder")
      }
    },
    {
      name: "insurance",
      type: "input",
      label: t("page.common.club.activity.package.column.insurance"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.insurance_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.insurance_placeholder")
      }
    },
    {
      name: "price",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.price"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.price_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.price_placeholder")
      }
    },
    {
      name: "activeFeeDetail",
      type: "input",
      label: t("page.common.club.activity.package.column.activeFeeDetail"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.activeFeeDetail_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.activeFeeDetail_placeholder")
      }
    },
    {
      name: "reservation",
      tagName: "el-switch",
      label: t("page.common.club.activity.package.column.reservation"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.reservation_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "reservationPrice",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.reservationPrice"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.reservationPrice_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.reservationPrice_placeholder")
      }
    },
    {
      name: "state",
      type: "input",
      label: t("page.common.club.activity.package.column.state"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.state_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.state_placeholder")
      }
    },
    {
      name: "wxLink",
      type: "input",
      label: t("page.common.club.activity.package.column.wxLink"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.wxLink_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.wxLink_placeholder")
      }
    },
    {
      name: "url",
      type: "input",
      label: t("page.common.club.activity.package.column.url"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.url_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.url_placeholder")
      }
    },
    {
      name: "autoCreateGroup",
      tagName: "el-switch",
      label: t("page.common.club.activity.package.column.autoCreateGroup"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.autoCreateGroup_placeholder")
        }
      ],
      props: {
        style: "--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      }
    },
    {
      name: "viewTimes",
      tagName: "el-input-number",
      label: t("page.common.club.activity.package.column.viewTimes"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.viewTimes_placeholder")
        }
      ],
      props: {
        step: 1,
        placeholder: t("page.common.club.activity.package.column.viewTimes_placeholder")
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
