<template>
  <div>
    <Pager
      :current="current"
      :total="total"
      :limit="limit"
      :visibleNumber="visibleNumber"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from './'
export default {
  components: {
    Pager
  },
  data () {
    return {
      current: 7,
      total: 63,
      limit: 8,
      visibleNumber: 7
    }
  },
  methods: {
    handlePageChange (newPage) {
      this.current = newPage
      console.log('加载当前页数据')
    }
  }
}
</script>

<style scoped></style>
