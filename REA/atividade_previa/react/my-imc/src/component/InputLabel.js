export const InputLabel = props => {
    return(
    <div>
        <label>
            {props.label}
            <input type='number' value={props.value} min='0' max='400' id={props.id} onChange={props.onChange} />
        </label>
    </div>
    )
}