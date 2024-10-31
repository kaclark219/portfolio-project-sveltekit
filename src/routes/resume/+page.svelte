<script>
    import resume from '$lib/assets/Resume.pdf'
    import PdfViewer from 'svelte-pdf';
</script>

<PdfViewer url={resume} data={null} />