<template>
    <div class="container">
    <CounterBody count=0 />
    <div class="buttoncomp">
      <ButtonComp text="Increment" color= #15CDCA />
      <ButtonComp text="Decrement" color= #FF7BBF />
      <ButtonComp text="Reset" color= #964EC2 />
      <ButtonComp text="setValue" color= #964EC2 />
    </div>
  </div>
</template>

<script>
import CounterBody from '@/components/CounterBody.vue';
import ButtonComp from '@/components/ButtonComp.vue';

export default {
 name: 'ContainerComp',
 components: {
  CounterBody,
  ButtonComp
 }
}
</script>
