<template>
  <div>
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="300"
    />
    <Icon type="home" />
    <Icon type="success" />
    <Icon type="error" />
    <Icon type="close" />
    <Icon type="info" />
    <Icon type="blog" />
    <Icon type="code" />
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
import Avatar from './components/Avatar'
import Icon from './components/Icon'
import Pager from './components/Pager'
export default {
  components: {
    Avatar,
    Icon,
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

<style scoped>
.icon-container {
  font-size: 24px;
  color: #008c8c;
}
</style>
