Vue.component('custom-card', {
  render: function(createElement) {
    return createElement('div', { class: 'custom-card-container' }, [
      createElement('div', { class: 'card-header clearfix' }, [
        createElement('span', { class: 'title', domProps: { innerHTML: this.item.title } }),
        createElement('div', { class: 'card-header-btn' }, [
          createElement('div', { class: 'card-header-btn-edit' }, [
            createElement('i', { class: 'el-icon-edit' }),
            createElement('span', { domProps: { innerHTML: '编辑' } })
          ]),
          createElement('div', { class: 'card-header-btn-delete' }, [
            createElement('i', { class: 'el-icon-delete' }),
            createElement('span', { domProps: { innerHTML: '删除' }, on: { click: this.deleteCard } })
          ])
        ])
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
  mounted() {
    $('#' + this.item.i).load(this.item.templateUrl);
  },
  data() {
    return {};
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
