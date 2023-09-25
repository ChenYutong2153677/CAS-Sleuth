<template>
    <div class="bg">
        <loadingLogo v-if="isLoading" style="z-index: 999"></loadingLogo>
        <dialogBox ref="dialogBox"></dialogBox>



        <div class="top-div">
            <el-row>
                <el-col :span="4">
                    <div class="result_title">search results</div>
                </el-col>
                <el-col :span="20">
                    <SearchBox @new_input="handle_new_input" class="search_box"></SearchBox>
                </el-col>
            </el-row>
        </div>
        <div class="result_num">
            for “<span class="green">{{ this.input }}</span>” we have <span class="green">{{ this.virus_num }}</span>
            results for you.
        </div>
        <div>
            <downloadButton @click="download" class="position" style="vertical-align: -40%"></downloadButton>
            <span style="margin-left: 10px; line-height:15px;">the results you selected!</span>
        </div>
        <!--        表格-->
        <div class="table_position">
            <el-table :data="tableData" fit stripe style="width: 95%;opacity: 0.9" class="data-table"
                      @row-click="clickRow" :row-class-name="tableRowClassName"
                      :header-cell-style="{
                        'height': '60px',
                        'font-size': '14px',
                        'background': 'RGB(81,196,214) !important',
                        'color': '#ffffff',
                        'border': 'none !important',
                      }"
            >
                <el-table-column type="selection" width="55"/>
                <el-table-column prop="accession" label="Accession_Number" width="160">
                    <template #default="scope">
                        <div class="custom-column">
                            <span class="accession-colum-style">
                              {{ scope.row.accession }}
                            </span>
                        </div>
                    </template>

                </el-table-column>
                <el-table-column prop="organism_name" label="Organism_Name" width="170"/>
                <el-table-column prop="isolate" label="Isolate" width="90"/>
                <el-table-column prop="species" label="Species"/>
                <el-table-column prop="family" label="Family"/>
                <el-table-column prop="length" label="Length" width="80"/>
                <el-table-column prop="segment" label="Segment" width="90"/>
                <el-table-column prop="geo_location" label="Geo_location" width="150"/>
                <el-table-column prop="host" label="Host"/>
                <el-table-column prop="more" label="..." width="50"/>
            </el-table>
        </div>
        <!--        分页-->
        <el-pagination
                class="my_pagination"
                layout="prev, pager, next"
                :total="totalPage_num"
                @current-change="curChange"
        />
    </div>
</template>

<style scoped>
.my_pagination {
    margin-left: 37%;
    margin-top: 10px;
}

:deep(.el-table__header-wrapper) {
    border-radius: 26px;
    z-index: 100 !important;
    overflow: hidden;
    -webkit-border-radius: 26px;
    -moz-border-radius: 26px;
    -ms-border-radius: 26px;
    -o-border-radius: 26px;
}

:deep(.el-table__row:hover) {
    cursor: pointer !important;
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover) > td {
    background-color: RGB(236, 240, 255);
}

.accession-colum-style {
    font-family: Arial;
    font-weight: bold;
    color: #384FB9;
}

.table_position {
    margin-top: 10px;
    margin-left: 7%;
}

.position {
    margin-top: 1%;
    margin-left: 7%;

    .data-table {
        opacity: 0.1;
    }
}

.result_num {
    margin-left: 30px;
    margin-top: 10px;
    font-family: Arial;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
}

.green {
    color: RGB(0, 192, 175);
    font-weight: bold;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg2.png');
    background-size: cover;
}

.top-div {
    margin-top: 8%;
    width: 100%;
    height: 70px;
    background: linear-gradient(0deg, #91E4DC, #91E4DC),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);

}

.result_title {
//font-family: Orbitron; font-family: Arial; //font-size: 24px; font-size: 23px; line-height: 41px; letter-spacing: 0em; margin-left: 15%;
    margin-top: 7%;
}

.search_box {
//padding-bottom:10px ;
}

</style>

<script>
import SearchBox from "@/components/SearchBox.vue";
import loadingLogo from "@/components/loadingLogo.vue";
import downloadButton from "@/components/download-button.vue";
import dialogBox from "@/components/dialogBox.vue";
import {ElMessage} from "element-plus";
import axios from "axios";

export default {
    name: 'databaseResult',
    components: {SearchBox, loadingLogo, downloadButton, dialogBox},
    data() {
        return {
            input: '',
            isLoading: false,
            virus_num: 0,
            tableData: [
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "1",
                    "length": 3682,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 23,
                    "accession": "NC_078779.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "2",
                    "length": 3020,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 24,
                    "accession": "NC_078780.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "3",
                    "length": 548,
                    "host": "Mus musculus",
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 25,
                    "accession": "NC_078781.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "4",
                    "length": 714,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 26,
                    "accession": "NC_078782.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "5",
                    "length": 3314,
                    "host": "Mus musculus",
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 27,
                    "accession": "NC_078783.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "6",
                    "length": 9991,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 28,
                    "accession": "NC_078784.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "4",
                    "length": 714,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 29,
                    "accession": "NC_078782.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "5",
                    "length": 3314,
                    "host": "Mus musculus",
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 30,
                    "accession": "NC_078783.1",
                    "family": "Adenoviridae"
                },
                {
                    "isolate": null,
                    "geo_location": null,
                    "species": "Murine mastadenovirus A",
                    "segment": "6",
                    "length": 9991,
                    "host": null,
                    "organism_name": "Murine adenovirus 1",
                    "virus_id": 31,
                    "accession": "NC_078784.1",
                    "family": "Adenoviridae"
                }
            ],
            currentPage: 1,
            totalPage_num: 0,
        }
    },
    created() {
        this.input = this.$route.query.input;
        console.log("new page:" + this.input);

        //获取病毒列表并赋值给本页的virus_list
        this.getData();
    },
    methods: {
        handle_new_input(message) {
            console.log("handle_new_input:" + message);
            this.input = message;
        },
        download() {
            this.$refs.dialogBox.openDialog();
        },
        clickRow(row) {
            // console.log(row);  // 当前点击的行数据
            // console.log(row.index);   // 当前点击的行的索引值
            ElMessage({
                message: 'click virus_id :' + row.virus_id,
                type: 'success'
            });
            //跳转相应的详情页面
            //把tabledata里所有的virus_id提取出来
            const virus_id_list = this.tableData.map(item => item.virus_id);
            console.log(virus_id_list);
            console.log(row.index);
            this.$router.push(
                {
                    name: 'virusDetail', params: {virus_id_list: virus_id_list, index: row.index}
                })
        },
        tableRowClassName({row, rowIndex}) {
            row.index = rowIndex;
        },
        getData() {
            this.isLoading = true;
            axios.get('/api/virus/page?name='+this.input+'&pageNum='+this.currentPage+'&pageSize=9').then((res) => {
                console.log("已获取到数据");
                console.log(res)
                res= res.data;
                this.totalPage_num = res.totalNum;
                this.tableData = res.virusResult;
                this.virus_num=res.totalNum;
                this.isLoading = false;
            }).catch(err => {
                console.log(err);
                this.isLoading = false;
            });
        },

        curChange(res) {
            this.currentPage = res;
            //请求新页的数据
            this.getData();
        },
    },
}
</script>

