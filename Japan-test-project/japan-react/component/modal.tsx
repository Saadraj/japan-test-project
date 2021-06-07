
const ModelData = ({ data, modalRef, hideModal }) => {
    return (
        <>
            <div className="modal fade" tabIndex={-1} ref={modalRef}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2
                                className="modal-title display-6"
                                id="staticBackdropLabel"
                            >
                                {data.DisplayName}
                            </h2>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={hideModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p className="">
                                <strong>Name : </strong>
                                <span>{data.Name || "N/A"}</span>
                            </p>
                            <p className="">
                                <strong>Brand : </strong>
                                <span>{data.Brand || "N/A"}</span>
                            </p>
                            <p className="">
                                <strong>Brand : </strong>
                                <span>{data.Brand || "N/A"}</span>
                            </p>
                            <p className="N/A">
                                <strong>Model : </strong>
                                <span>{data.Model || "N/A"}</span>
                            </p>
                            <p className="N/A">
                                <strong>Group Id : </strong>
                                <span>{data.GroupId || "N/A"}</span>
                            </p>
                            <p className="N/A">
                                <strong>Protocol Order : </strong>
                                <span>{data.ProtocolOrder || "N/A"}</span>
                            </p>
                            <p className="N/A">
                                <strong>Status : </strong>
                                <span>{data.Status || "N/A"}</span>
                            </p>
                            <p className="N/A">
                                <strong>Description : </strong>
                                <span>{data.Description || "N/A"}</span>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={hideModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModelData;
