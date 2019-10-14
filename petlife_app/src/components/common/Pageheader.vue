<template>
    <div class="header">
        <div class="signdiv">
            <img src="../../assets/sign.svg" class="signImg">
            <span>签到</span>
        </div>
        <img src="../../assets/msg.svg" class="msgImg">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* 页头div */
    .header{
        /* background-color:#ffd028;  */
        display:flex; /*给signdiv和msgImg设置弹性布局*/
        justify-content: space-between;
        padding:.5rem 0 .3rem 0;  /*header内容距边距距离*/
        position:fixed;
        z-index:1;
        width:100%;
    }
    /* 左边签到div */
    .signdiv{
        width:5rem;height:2rem;
        background-color: #fff;
        display:flex;  /*signImg和span元素设置弹性*/
        justify-content: space-evenly;
        align-items: center;
        border-radius: 0 1rem 1rem 0;
    }
    /* 左边签到图标 */
    .signImg{
        width:1.5rem;
    }
    /* 右边消息提示图标 */
    .msgImg{
        width:1.65rem;
        padding-right:.8rem;
    }
</style>

