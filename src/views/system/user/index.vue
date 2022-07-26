<script setup lang="ts">
import { UrlListType } from "@/utils/list/listFactory";
import { SimpleListType, useSimpleList } from "@/hooks/useSimpleList";
import { useI18n } from "vue-i18n";
import { setupUserAttributes, SysUserDataModel } from "./data.d";
import Edit from "./edit.vue";

const { t } = useI18n();

const url: Partial<UrlListType> = {
  add: "/v1/sys-user",
  list: "/v1/sys-user/search",
  delete: "/v1/sys-user/${userId}",
  edit: "/v1/sys-user"
};

const initialValues = {
  title: "",
  content: "",
  type: ""
};

const { searchFilterOptions, tableColumns } = setupUserAttributes();

const searchParams = ref(initialValues);

const filterOptions = computed(() => {
  return searchFilterOptions.value;
});
const {
  loading,
  dataSource,
  ipagination,
  modalFormRef,
  loadData,
  handleSizeChange,
  handleCurrentChange,
  handleAdd,
  handleEdit,
  handleDelete,
  handleSearch,
  handleReset
} = useSimpleList<SysUserDataModel>(url) as SimpleListType;
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
      <div class="mx-3 mt-5">
        <el-button type="primary" @click="handleAdd()">{{ t("page.common.btn.add") }}</el-button>
        <el-button type="danger">{{ t("page.common.btn.delete") }}</el-button>
      </div>
      <c-table
        v-loading="loading"
        :table-data="dataSource"
        :columns="tableColumns"
        align="right"
        header-align="right"
        stripe
        style="width: 100%"
      >
        <template #avatar="{ scope }">
          <el-avatar shape="square" fit="fill" :src="scope.row.avatarPath" />
        </template>

        <template #actions="{ scope }">
          <el-button size="small" @click="handleEdit(scope.row)">{{
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
  <Edit ref="modalFormRef" @close="loadData" @submit="hand" />
</template>
