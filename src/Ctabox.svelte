<script>
    export let headline;
    export let subline;
    export let button;
    export let boxed;
</script>

<div class="box {boxed ? '' : '-cta'} row">
    {#if boxed }
        <div class="col-lg-12 col-xs-12">
            <h2>{headline}</h2>
            <p>{subline}</p>
            {#if button}
                <button type="submit" class="cta-button">{button}</button>
            {/if}
        </div>
    {:else}
        <h2>{headline}</h2>
        <p>{subline}</p>
        {#if button}
            <button type="submit" class="cta-button">{button}</button>
        {/if}
    {/if}
</div>

<style>
    .box div {
        margin: 15px 30px;
        text-align: center;
    }
    .cta-button {
        margin: 0 auto 30px auto;
        cursor: pointer;
        color: #212121;
        border: 2px solid #5dff31;
        background: #5dff31;
        border-radius: 15px;
        transition: all 0.7s;
        line-height: 30px;
        font-size: 22px;
        font-family: 'Slabo27px', sans-serif;
        font-weight: 700;
        padding: 10px 2rem;
    }
</style>