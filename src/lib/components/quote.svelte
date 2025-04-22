<script lang="ts">
	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
		author?: import('svelte').Snippet;
	}

	let { class: cls = 'flex flex-col text-sm sm:text-base', children, author }: Props = $props();
</script>

<figure class={cls}>
	<blockquote class="leading-tight font-bold">
		&ldquo;{@render children?.()}&rdquo;
	</blockquote>
	{#if author}
		<figcaption class="italic">- {@render author?.()}</figcaption>
	{/if}
</figure>
