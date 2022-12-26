export const FeedbackOptions = function ({ onLeaveFeedback, options }) {
    return (
        <>
            {options.map((e) => (
            <button type="button" onClick={() => onLeaveFeedback(e)}>{e}</button>
            ))}
        </>
    );
}
