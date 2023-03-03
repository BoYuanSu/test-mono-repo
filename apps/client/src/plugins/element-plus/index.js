import {
  ElButton,
  ElDialog,
  ElCard,
  ElInput,
  ElSelect,
  ElCheckbox,
  ElDatePicker,
  ElOption,
  ElMessage,
  ElMessageBox,
  ElLoading,
  ElProgress,
  ElDrawer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElTable,
  ElTableColumn,
  ElForm,
  ElFormItem,
  ElPagination,
  ElPopover,
} from 'element-plus'
// import 'element-plus/dist/index.css' // LOCALDEV unittest

export default {
  install: (app) => {
    app.component('ElButton', ElButton)
    app.component('ElDialog', ElDialog)
    app.component('ElProgress', ElProgress)
    app.component('ElCard', ElCard)

    app.component('ElForm', ElForm)
    app.component('ElFormItem', ElFormItem)
    app.component('ElInput', ElInput)
    app.component('ElSelect', ElSelect)
    app.component('ElOption', ElOption)
    app.component('ElCheckbox', ElCheckbox)
    app.component('ElDatePicker', ElDatePicker)
    app.component('ElDrawer', ElDrawer)
    app.component('ElDropdown', ElDropdown)
    app.component('ElDropdownMenu', ElDropdownMenu)
    app.component('ElDropdownItem', ElDropdownItem)
    app.component('ElMenu', ElMenu)
    app.component('ElSubMenu', ElSubMenu)
    app.component('ElMenuItem', ElMenuItem)
    app.component('ElTable', ElTable)
    app.component('ElTableColumn', ElTableColumn)
    app.component('ElPagination', ElPagination)
    app.component('ElPopover', ElPopover)

    app.provide('$messageBox', ElMessageBox)
    app.provide('$message', ElMessage)

    app.directive('loading', ElLoading.directive)
  },
}
