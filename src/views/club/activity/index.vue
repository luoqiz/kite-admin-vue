<script setup lang="ts">
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { useI18n } from "vue-i18n";
import { setupAttributes, ClubActivityDataModel, url } from "./data.d";
import Edit from "./edit.vue";

const { t } = useI18n();

const initialValues = {
  title: "",
  labelId: "",
  leaderId: "",
  startTime: "",
  endTime: "",
  postingTime: "",
  regisTime: "",
  refundTime: "",
  publisherId: "",
  clubId: "",
  provinceCode: "",
  cityCode: "",
  addr: "",
  strengthLevel: "",
  gatheringTime: "",
  gatheringAddr: "",
  insurance: "",
  reservation: "",
  state: "",
  autoCreateGroup: "",
  tenantId: ""
};

const { searchFilterOptions, tableColumns } = setupAttributes();

const searchParams = ref(initialValues);

const filterOptions = computed(() => {
  return searchFilterOptions.value;
});

const isEmpty = computed(() => {
  return ids.value.length === 0;
});

const {
  ids,
  loading,
  dataSource,
  ipagination,
  modalFormRef,
  loadData,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange,
  handleOpenAddDialog,
  handleOpenEditDialog,
  handleDelete,
  handleBatchDelete,
  handleSearch,
  handleReset
} = useSimpleList<ClubActivityDataModel>(url) as SimpleListType;
</script>

<template>
  <div class="relative w-full">
    <div class="p-[8px] absolute w-full">
      <div class="mx-3 mt-5">
        <search-filter
          :model="searchParams"
          :options="filterOptions"
          :show-reset="true"
          @reset="handleReset"
          @search="handleSearch"
        />
      </div>
      <c-table
        v-loading="loading"
        :table-data="dataSource"
        :show-header="true"
        :columns="tableColumns"
        header-align="right"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <template #options>
          <el-button icon="refresh" circle @click="handleSearch" />
          <el-button type="primary" icon="plus" circle @click="handleOpenAddDialog" />
          <el-popconfirm
            :title="t('page.common.btn.batchDelete_popover')"
            @confirm="handleBatchDelete()"
          >
            <template #reference>
              <el-button :disabled="isEmpty" type="danger" icon="delete" circle />
            </template>
          </el-popconfirm>
        </template>

        <template #reservation="{ scope }">
          <el-tag class="ml-2" type="success" v-if="scope.row.reservation == 1">是否分预定</el-tag>
          <el-tag class="ml-2" type="danger" v-if="scope.row.reservation == 0">是否分预定</el-tag>
        </template>
        <template #autoCreateGroup="{ scope }">
          <el-tag class="ml-2" type="success" v-if="scope.row.autoCreateGroup == 1"
            >自动建群</el-tag
          >
          <el-tag class="ml-2" type="danger" v-if="scope.row.autoCreateGroup == 0">自动建群</el-tag>
        </template>

        <template #actions="{ scope }">
          <el-button size="small" @click="handleOpenEditDialog(scope.row)">{{
            t("page.common.btn.edit")
          }}</el-button>
          <el-popconfirm
            :title="t('page.common.btn.delete_popover')"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button size="small" type="danger">{{ t("page.common.btn.delete") }}</el-button>
            </template>
          </el-popconfirm>
        </template>
      </c-table>
      <div class="float-right mt-2">
        <el-pagination
          v-model:currentPage="ipagination.current"
          v-model:page-size="ipagination.pageSize"
          small
          :page-sizes="ipagination.pageSizeOptions"
          :background="true"
          layout="sizes, prev, pager, next"
          :total="ipagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
  <Edit ref="modalFormRef" @close="loadData" />
</template>
