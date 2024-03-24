import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useParams,useNavigate} from "react-router-dom";
import {healthDetail} from "../../actions/HealthDetailAction";
/* global kakao*/

export const HealthDetail=()=> {
    const dispatch = useDispatch()
    const {no}=useParams()
    const nav=useNavigate()
    useEffect(() => {
        dispatch(healthDetail(no))
    }, [])
    const health_detail = useSelector((state) => state.healths.health_detail)
    useEffect(() => {
        if (health_detail.address) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=23e8040d553778eeeb77f0900cb92322&autoload=false&libraries=services";
            document.head.appendChild(script);

            script.onload = () => {
                kakao.maps.load(() => {
                    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
                    const mapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                    // 지도를 생성합니다
                    const map = new kakao.maps.Map(mapContainer, mapOption);

                    // 주소-좌표 변환 객체를 생성합니다
                    const geocoder = new kakao.maps.services.Geocoder();

                    // 주소로 좌표를 검색합니다
                    geocoder.addressSearch(health_detail.address, function (result, status) {
                        // 정상적으로 검색이 완료됐으면
                        if (status === kakao.maps.services.Status.OK) {
                            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                            // 결과값으로 받은 위치를 마커로 표시합니다
                            const marker = new kakao.maps.Marker({
                                map: map,
                                position: coords
                            });

                            // 인포윈도우로 장소에 대한 설명을 표시합니다
                            const infowindow = new kakao.maps.InfoWindow({
                                content: '<div style="width:150px;text-align:center;padding:6px 0;">' + health_detail.title + '</div>'
                            });
                            infowindow.open(map, marker);

                            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                            map.setCenter(coords);
                        }
                    });
                });
            };
        }
    }, [health_detail]);

    return(
        <Fragment>
            <div id="health-page">
                <header className="page-head">
                    <div className={"center"} style={{"marginTop": "-70px"}}>
                        <span style={{"fontSize": "70px"}}>Health Center</span>
                        <p style={{"color": "white"}}>운동 센터</p>
                    </div>
                </header>
            </div>
            <div className={"container"} style={{"marginBottom": "80px", "marginTop": "30px"}}>
                <div className={"row"}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td width={"30%"} className={"text-center"} rowSpan={"4"}>
                                <img src={health_detail.poster}
                                     style={{"width": "380", "height": "380px"}}
                                />
                            </td>
                            <td colSpan={"2"}>
                                <h3>{health_detail.title}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td className={"text-center"} width={"20%"}>주소</td>
                            <td width={"50%"}>{health_detail.address}</td>
                        </tr>
                        <tr>
                            <td className={"text-center"} width={"20%"}>전화</td>
                            <td width={"50%"}>{health_detail.phone}</td>
                        </tr>
                        <tr>
                            <td className={"text-center"} width={"20%"}>영업시간</td>
                            <td width={"50%"}>{health_detail.time}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{"height": "10px"}}></div>
                <div className={"row"}>
                    <div id="map" style={{width: '100%', height: '400px'}}></div>
                </div>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td colSpan={"3"} className={"text-right"}>
                            <button className={"btn-xs"} onClick={() => nav("/health/list")}>목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}