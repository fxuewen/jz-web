Vue.component('custom-card-show', {
  render: function(createElement) {
    return createElement('div', { class: 'custom-card-container' }, [
      createElement('div', { class: 'card-header clearfix' }, [
        createElement('span', { class: 'title', domProps: { innerHTML: this.item.title } })
      ]),
      createElement('div', { class: 'card-content', attrs: { id: this.item.i } }, [])
    ]);
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    $('#' + this.item.i).load(this.item.templateUrl);
  },
  methods: {
    // 删除卡片
    deleteCard() {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$emit('card-delete', this.item);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    }
  }
});
