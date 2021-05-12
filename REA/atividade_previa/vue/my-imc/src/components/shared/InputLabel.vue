<template>
    <label>
        {{label}}
        <input 
            type='number' 
            :value="value" 
            min='0' 
            max='400' 
            :id="customid" 
            @input="!!onInputChange && onInputChange($event)">
    </label>
</template>

<script>
export default {
    name: "inputlabel",
    props:{
        label: String,
        value: String,
        customid: String,
        onInputChange: Function,
    }    
}
</script>