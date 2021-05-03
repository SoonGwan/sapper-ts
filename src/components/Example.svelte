<svelte:options immutable />

<script>
  export let title: string;
</script>

<style>
  h1 {
    text-align: center;
    color: dodgerblue;
    margin-top: 2rem;
  }
</style>

<h1>{title}</h1>
