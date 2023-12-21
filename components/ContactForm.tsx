import Script from 'next/script'

export default function ContactForm({src, title}: {src: string, title: string}) {
    let Tally: any;

    return (
        <>
            <iframe data-tally-src={`https://${src}.paul-surrans.fr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&embed=1`} width="100%" height="284" frameBorder="0" marginHeight={0} marginWidth={0}title={title}></iframe>

            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </>
    )
}