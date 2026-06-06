<script lang="ts"></script>

<div class="nav-container">
	<nav>
		<p>HOME</p>
		<p>ABOUT</p>
	</nav>
</div>

<style>
	.nav-container {
		border-bottom: var(--border-default);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: #fff;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	nav p {
		font-family: 'IBM Plex Sans';
	}
</style>
