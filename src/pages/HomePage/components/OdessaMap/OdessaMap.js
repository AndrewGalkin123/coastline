import React from "react";


const OdessaMap = () => {
    return (
        <div style={{ justifyContent: "center" }}>
            <div>
                <br />
                <div className="title">
                    <hr />
                    <span>Карта Одессы. Места съемок</span>
                </div>
                <br />
                <br />
                <br />
                <div
                    className="content"
                    style={{ maxWidth: "1290px", textAlign: "center" }}
                >

                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=14h5r74Wg4V75i8AC2_SOBeYQ_3mBcEE&ehbc=2E312F"
                        width="100%"
                        height="600"
                        title="Google Map"
                    ></iframe>

                </div>
            </div>
        </div>
    );
}

export default OdessaMap;