// 자동 생성: python scripts/build_dashboard_data.py (직접 고치지 말 것)
// 주차 목록 + URL의 ?week=<id> 주차 데이터(data/weeks/<id>.js)를 불러옴. 없으면 최신 주
var WEEKS=[{"id": "2026-11-01", "label": "10월 5주차 (10/26~11/1 집계)"}];
(function(){var w=new URLSearchParams(location.search).get('week');var id=WEEKS.some(function(x){return x.id===w})?w:WEEKS[0].id;window.WEEK=id;document.write('<script src="data/weeks/'+id+'.js"><\/script>')})();
