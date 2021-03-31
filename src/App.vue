<template>
  <div>
    <Avatar url='http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c' :size='300' />
    <Icon type="home"/>
    <Icon type="success"/>
    <Icon type="error"/>
    <Icon type="close"/>
    <Icon type="info"/>
    <Icon type="blog"/>
    <Icon type="code"/>
  </div>
</template>

<script>
import Avatar from './components/Avatar'
import Icon from './components/Icon'
export default {
  components: {
    Avatar,
    Icon
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 24px;
  color: #008c8c;
}
</style>
