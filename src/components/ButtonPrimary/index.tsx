import "./styles.css"

type Props = {
    text: string
}

export default function ButtonPrimary({text}: Props) {
    return (
        <button type="submit" className="gapi-btn gapi-btn-primary">{text}</button>
    );
}
