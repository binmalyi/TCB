const
    isEmpty = /(^$)/,
    sample = [
    { oldTopic: null, newTopic: "" }, // nothing changed
    { oldTopic: "", newTopic: "" }, // nothing changed
    { oldTopic: "xyz", newTopic: "" }, // removed
    { oldTopic: "xyz", newTopic: "abc" }, // changed
    { oldTopic: "", newTopic: "abc" }, // added
    { oldTopic: null, newTopic: "abc" }, // added
];

function Audit(_old: null|string, _new: null|string){
    return (typeof _old === "string" && typeof _new === "string") && (!isEmpty.test(_old) && !isEmpty.test(_new)) && (_old !== _new) ? "Modified"
    :
    (
        (_old === _new) || (!_old && !_new) ? "Unmodified"
        :
        (
            _old && isEmpty.test(_new!) ? "Removed"
            : "Added"
        )
    );
};

sample.forEach(({oldTopic, newTopic}) => console.log(Audit(oldTopic, newTopic)));