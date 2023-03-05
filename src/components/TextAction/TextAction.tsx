export interface TextActionProps{
  headline?: Headline[],
  text: string,
  actionText: string,
  actionLink: string
}

interface Headline{
  text: string
  isOutlined: boolean
}

export default function TextAction({headline, text, actionText, actionLink}: TextActionProps){
  return(
    <>
      {headline && <h2 className="h3">{headline.map(h3 => 
        (<span className={h3.isOutlined ? 'text-outline' : ''}>{h3.text}</span>))}
      </h2>}
      <div className="text-group">
        <p className="medium-text spacing-bottom-20">{text}</p>
        <a className="link large-text primary-text" href={actionLink}>{actionText}</a>
      </div>
    </>
  )
}
