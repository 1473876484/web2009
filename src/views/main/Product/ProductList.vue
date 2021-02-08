<template>
    <el-table :data="tableData">
        <el-table-column
            show-overflow-tooltip
            prop="id"
            label="产品ID"
            width="100"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="title"
            label="商品名称"
            width="200"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="image"
            label="商品图片"
            width="100"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="sellPoint"
            label="商品卖点"
            width="300"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="price"
            label="商品价格"
            width="100"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="num"
            label="商品数量"
            width="100"
        ></el-table-column>
        <el-table-column
            show-overflow-tooltip
            prop="descs"
            label="商品描述"
        ></el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
        };
    },
    mounted() {
        this.http(1);
        this.$bus.$on("page", (page) => {
            this.http(page);
        });
    },
    methods: {
        http(page) {
            this.$api.selectTbItemAllByPage({page}).then((res) => {
                console.log(res.data);
                if (res.data.status === 200) {
                    this.tableData = res.data.result;
                }
            });
        },
    },
};
</script>

<style scoped>
</style>