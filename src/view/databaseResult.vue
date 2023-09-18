<template>
    <div class="bg">
        <loadingLogo v-if="isLoading"></loadingLogo>
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
            <downloadButton class="position" style="vertical-align: -40%"></downloadButton>
            <span style="margin-left: 10px; line-height:15px;">the results you selected!</span>
        </div>
<!--        表格-->
        <div class="table_position">
            <el-table :data="tableData" stripe style="width: 90%" class="data-table">
                <el-table-column prop="accession" label="Accession_Number" width="160"/>
                <el-table-column prop="organism_name" label="Organism_Name" width="160"/>
                <el-table-column prop="isolate" label="Isolate"/>
                <el-table-column prop="species" label="Species"/>
                <el-table-column prop="family" label="Family"/>
                <el-table-column prop="length" label="Length" width="80"/>
                <el-table-column prop="segment" label="Segment"/>
                <el-table-column prop="geo_location" label="Geo_location" width="160"/>
                <el-table-column prop="host" label="Host" width="80"/>
            </el-table>

        </div>
    </div>
</template>

<style scoped>
.data-table thead{
    color: red;
    font-size: 14px;
}
.table_position{
    margin-left: 7%;
}
.position{
    margin-top: 1%;
    margin-left: 7%;
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
//font-family: Orbitron; font-family: Arial; //font-size: 24px; font-size: 23px; line-height: 41px;
    letter-spacing: 0em;
    margin-left: 15%;
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
export default {
    name: 'databaseResult',
    components: {SearchBox, loadingLogo,downloadButton},
    data() {
        return {
            input: '',
            isLoading: false,
            virus_num: 0,
            tableData:[
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
                }
            ],
        }
    },
    created() {
        //获取病毒列表并赋值给本页的virus_list
        this.input = this.$route.query.input;
        console.log("new page:" + this.input);
    },
    methods: {
        handle_new_input(message) {
            console.log("handle_new_input:" + message);
            this.input = message;
        }
    }
}
</script>

