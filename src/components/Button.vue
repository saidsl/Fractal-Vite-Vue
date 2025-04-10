<template>
  <button :class="['btn', variant]" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Click me'
    },
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #42b983;
  color: white;
}

.secondary {
  background-color: #35495e;
  color: white;
}

.disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>
