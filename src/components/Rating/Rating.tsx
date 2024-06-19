type RatingProps = {
    value: 1 |  2 | 3 | 4 | 5 | 0
}

export function Rating(props: RatingProps) {
    console.log("rendering Rating")

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )

}

type StarProps = {
    selected: boolean
}

const Star = (props: StarProps) => {
    console.log("rendering Rating")
    if (props.selected) {
        return <span><b>star </b></span>
    }
    else {
        return <span>star </span>
    }
}
