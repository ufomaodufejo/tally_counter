<template>
    <div class="counterbody">
       <h1 class="count"> {{ count }}</h1>
    </div>
</template>

<script>
export default {
    name: 'CounterBody',
    props: {
        count: Number
    }
}
</script>

<style scoped>
 .counterbody{
   border: 2px solid goldenrod;
   text-align: center; 
   margin: 20px auto;
   width: 300px;
   height: 300px;
   background-color: #964EC2;
   border-radius: 50%;
 }
 .count{
    font-size: 150px;
    margin: 20px auto;
    text-align: center;
    width: 250px;
    height: 250px;
    background-color: #fff;
    border-radius: 50%;
 }
</style>