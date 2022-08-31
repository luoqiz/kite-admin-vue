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
        type: "datetime",
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
        type: "datetime",
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
        type: "datetime",
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
        type: "datetime",
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
        type: "datetime",
        "value-format": "YYYY-MM-DD HH:mm:ss",
        placeholder: t("page.common.club.activity.package.column.refundTime_placeholder")
      }
    },
    {
      name: "quota",
      type: "input",
      label: t("page.common.club.activity.package.column.quota"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.quota_placeholder")
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.quota_placeholder")
      }
    },
    {
      name: "publisherId",
      type: "input",
      label: t("page.common.club.activity.package.column.publisherId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.publisherId_placeholder")
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.publisherId_placeholder")
      }
    },
    {
      name: "clubId",
      type: "input",
      label: t("page.common.club.activity.package.column.clubId"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.clubId_placeholder")
        }
      ],
      props: {
        maxLength: 150,
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
      type: "input",
      label: t("page.common.club.activity.package.column.strengthLevel"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.strengthLevel_placeholder")
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.strengthLevel_placeholder"),
        trigger: "blur"
      }
    },
    {
      name: "mileage",
      type: "input",
      label: t("page.common.club.activity.package.column.mileage"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.mileage_placeholder")
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.mileage_placeholder"),
        trigger: "blur"
      }
    },
    {
      name: "rise",
      type: "input",
      label: t("page.common.club.activity.package.column.rise"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.rise_placeholder")
        }
      ],
      props: {
        maxLength: 150,
        placeholder: t("page.common.club.activity.package.column.rise_placeholder"),
        trigger: "blur"
      }
    },
    {
      name: "decline",
      type: "input",
      label: t("page.common.club.activity.package.column.decline"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.decline_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        maxLength: 150,
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
        type: "datetime",
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
      type: "input",
      label: t("page.common.club.activity.package.column.visits"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.visits_placeholder")
        }
      ],
      props: {
        maxLength: 150,
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
      name: "tripRequirements",
      type: "richText",
      label: t("page.common.club.activity.package.column.tripRequirements"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.tripRequirements_placeholder"),
          trigger: "blur"
        }
      ],
      props: {
        placeholder: t("page.common.club.activity.package.column.tripRequirements_placeholder")
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
      type: "richText",
      label: t("page.common.club.activity.package.column.notes"),
      colSpan: 24,
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
      type: "input",
      label: t("page.common.club.activity.package.column.price"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.price_placeholder")
        }
      ],
      props: {
        maxLength: 150,
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
      type: "input",
      label: t("page.common.club.activity.package.column.reservationPrice"),
      rules: [
        {
          required: true,
          message: t("page.common.club.activity.package.column.reservationPrice_placeholder")
        }
      ],
      props: {
        maxLength: 150,
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
      type: "input",
      label: t("page.common.club.activity.package.column.viewTimes"),
      rules: [
        {
          message: t("page.common.club.activity.package.column.viewTimes_placeholder")
        }
      ],
      props: {
        maxLength: 150,
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
  <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ t("page.common.btn.cancel") }}</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">{{
          t("page.common.btn.confirm")
        }}</el-button>
      </span>
    </template> -->
  <div class="box-class">
    <c-form ref="ruleFormRef" v-model:value="model" label-width="auto" :options="options"> </c-form>
    <span class="dialog-footer">
      <el-button @click="cancel">{{ t("page.common.btn.cancel") }}</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">{{
        t("page.common.btn.confirm")
      }}</el-button>
    </span>
  </div>
</template>

<style scoped>
.box-class {
  padding: 2rem;
}
</style>
