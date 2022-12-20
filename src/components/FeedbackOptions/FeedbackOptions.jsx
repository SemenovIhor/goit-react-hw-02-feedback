export const FeedbackOptions = function ({ countGoodFeedback, countNeutralFeedback, countBadFeedback }) {
    return (
        <>
            <button type="button" onClick={countGoodFeedback}>Good</button>
            <button type="button" onClick={countNeutralFeedback}>Neutral</button>
            <button type="button" onClick={countBadFeedback}>Bad</button>
        </>
    );
}
