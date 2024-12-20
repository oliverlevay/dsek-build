const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/apple-app-site-association",".well-known/apple-developer-merchantid-domain-association",".well-known/assetlinks.json","d-white.webp","d.webp","favicon.png","fonts/LegendaryRunes.otf","fonts/LegendaryRunes.ttf","fonts/TexasTango.otf","hero-image.webp","pattern.png"]),
	mimeTypes: {".json":"application/json",".webp":"image/webp",".png":"image/png",".otf":"font/otf",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.BiisPKwl.js","app":"_app/immutable/entry/app.Bmk9iyx0.js","imports":["_app/immutable/entry/start.BiisPKwl.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/entry/app.Bmk9iyx0.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/sv.fgqH_iRr.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./chunks/0-DGFAcUpX.js')),
			__memo(() => import('./chunks/1-CWeToptw.js')),
			__memo(() => import('./chunks/2-CMxdyQ8E.js')),
			__memo(() => import('./chunks/3-CY3oBv6x.js')),
			__memo(() => import('./chunks/4-Dzkjwrdq.js')),
			__memo(() => import('./chunks/5-BtLEnZos.js')),
			__memo(() => import('./chunks/6-CvfZlePS.js')),
			__memo(() => import('./chunks/7-FDKEr_PF.js')),
			__memo(() => import('./chunks/8-CWLTP6UD.js')),
			__memo(() => import('./chunks/9-BN5vZJK0.js')),
			__memo(() => import('./chunks/10-WZrZLxSh.js')),
			__memo(() => import('./chunks/11-BU50pR_m.js')),
			__memo(() => import('./chunks/12-D3Jzih5P.js')),
			__memo(() => import('./chunks/13-CljT9_yW.js')),
			__memo(() => import('./chunks/14-C35RIy6p.js')),
			__memo(() => import('./chunks/15-B1vFmDLP.js')),
			__memo(() => import('./chunks/16-BZ439Mox.js')),
			__memo(() => import('./chunks/17-DI4ywGoW.js')),
			__memo(() => import('./chunks/18-DNbklOFc.js')),
			__memo(() => import('./chunks/19-PhuyVtDZ.js')),
			__memo(() => import('./chunks/20-CwkjxsVt.js')),
			__memo(() => import('./chunks/21-CFkopNu5.js')),
			__memo(() => import('./chunks/22-Bg5wPDqk.js')),
			__memo(() => import('./chunks/23-8OElLnPq.js')),
			__memo(() => import('./chunks/24-CR0nYmLM.js')),
			__memo(() => import('./chunks/25-B8nH3yEE.js')),
			__memo(() => import('./chunks/26-gnwVjrwm.js')),
			__memo(() => import('./chunks/27-DiQc52ge.js')),
			__memo(() => import('./chunks/28-DsK0WFi6.js')),
			__memo(() => import('./chunks/29-ARQiVlBH.js')),
			__memo(() => import('./chunks/30-CWjEOObJ.js')),
			__memo(() => import('./chunks/31-Lbpap-sh.js')),
			__memo(() => import('./chunks/32-K8lDe1zx.js')),
			__memo(() => import('./chunks/33-bfEk_lXJ.js')),
			__memo(() => import('./chunks/34-Dynoq8Pa.js')),
			__memo(() => import('./chunks/35-BvyFdIx6.js')),
			__memo(() => import('./chunks/36-EslvpSxN.js')),
			__memo(() => import('./chunks/37-SfwHGWOK.js')),
			__memo(() => import('./chunks/38-D85Fub-Q.js')),
			__memo(() => import('./chunks/39-pM1LwWaq.js')),
			__memo(() => import('./chunks/40-BfOF9qv8.js')),
			__memo(() => import('./chunks/41-BrLaVyUS.js')),
			__memo(() => import('./chunks/42-FAdcHyfl.js')),
			__memo(() => import('./chunks/43-CfwUVuDw.js')),
			__memo(() => import('./chunks/44-DoiuvtHl.js')),
			__memo(() => import('./chunks/45-DuORL4Fm.js')),
			__memo(() => import('./chunks/46-CgFgyqY9.js')),
			__memo(() => import('./chunks/47-BXbXfIco.js')),
			__memo(() => import('./chunks/48-CFtUdzu5.js')),
			__memo(() => import('./chunks/49-BGz3DWv0.js')),
			__memo(() => import('./chunks/50-Bk2LsWkw.js')),
			__memo(() => import('./chunks/51-CBoWn09a.js')),
			__memo(() => import('./chunks/52-BK2LPsSp.js')),
			__memo(() => import('./chunks/53-CXjGpmi6.js')),
			__memo(() => import('./chunks/54-ALDbL9Ab.js')),
			__memo(() => import('./chunks/55-C2HNWlSJ.js')),
			__memo(() => import('./chunks/56-BTHstso_.js')),
			__memo(() => import('./chunks/57-B5NHKT-G.js')),
			__memo(() => import('./chunks/58-B-7UnpUd.js')),
			__memo(() => import('./chunks/59-CTo8xaom.js')),
			__memo(() => import('./chunks/60-dQp1rbtF.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/61-C69unuI8.js')),
			__memo(() => import('./chunks/62-d8GRwvWL.js')),
			__memo(() => import('./chunks/63-ChHDmEpF.js')),
			__memo(() => import('./chunks/64-BoiMUPIY.js')),
			__memo(() => import('./chunks/65-DJaQj7vo.js')),
			__memo(() => import('./chunks/66-8v3b8Nvp.js')),
			__memo(() => import('./chunks/67-AN9K7p1W.js')),
			__memo(() => import('./chunks/68-DuXO6eM3.js')),
			__memo(() => import('./chunks/69-B8a0j0aZ.js')),
			__memo(() => import('./chunks/70-ClI6As0E.js')),
			__memo(() => import('./chunks/71-BCVgnDd8.js')),
			__memo(() => import('./chunks/72-DG_A96CY.js')),
			__memo(() => import('./chunks/73-DclflUNl.js')),
			__memo(() => import('./chunks/74-DXHo_m1B.js')),
			__memo(() => import('./chunks/75-2rQR0GRl.js')),
			__memo(() => import('./chunks/76-DbVB2v1z.js').then(function (n) { return n._; })),
			__memo(() => import('./chunks/77-oNl76UsX.js')),
			__memo(() => import('./chunks/78-DJCkCkhQ.js')),
			__memo(() => import('./chunks/79-C64eeiUT.js')),
			__memo(() => import('./chunks/80-5yDo1rxP.js')),
			__memo(() => import('./chunks/81-DaApW_FU.js')),
			__memo(() => import('./chunks/82-DV_vmRxY.js')),
			__memo(() => import('./chunks/83-CZKRvyHD.js')),
			__memo(() => import('./chunks/84-B8C_jfs7.js')),
			__memo(() => import('./chunks/85-CumxvOZx.js')),
			__memo(() => import('./chunks/86-DQg57HPQ.js')),
			__memo(() => import('./chunks/87-CyyQTD21.js')),
			__memo(() => import('./chunks/88-BJ5oOkzH.js')),
			__memo(() => import('./chunks/89-a0ohzeqD.js')),
			__memo(() => import('./chunks/90-Cjb26fsH.js')),
			__memo(() => import('./chunks/91-CqMuLzuV.js')),
			__memo(() => import('./chunks/92-pnT13K0s.js')),
			__memo(() => import('./chunks/93-DczEG9lA.js')),
			__memo(() => import('./chunks/94-D2lo2b84.js')),
			__memo(() => import('./chunks/95-B3_F-Mjj.js')),
			__memo(() => import('./chunks/96-D_2x1x5p.js')),
			__memo(() => import('./chunks/97-OIMeMSaK.js')),
			__memo(() => import('./chunks/98-DFkrZQtc.js')),
			__memo(() => import('./chunks/99-B1KEhaIP.js')),
			__memo(() => import('./chunks/100-X5WmCu_z.js')),
			__memo(() => import('./chunks/101-C0fu6483.js')),
			__memo(() => import('./chunks/102--spmrYas.js')),
			__memo(() => import('./chunks/103-C-oidpSX.js')),
			__memo(() => import('./chunks/104-BGT7ojW7.js')),
			__memo(() => import('./chunks/105-CcUPEpTr.js')),
			__memo(() => import('./chunks/106-PYQxX5F7.js')),
			__memo(() => import('./chunks/107-Bo_XWv6S.js')),
			__memo(() => import('./chunks/108-G-bNnkJQ.js')),
			__memo(() => import('./chunks/109-CqUZ6ypc.js')),
			__memo(() => import('./chunks/110-D18jWWmI.js')),
			__memo(() => import('./chunks/111-CINYaRjE.js')),
			__memo(() => import('./chunks/112-BShpN_Kg.js')),
			__memo(() => import('./chunks/113-DN51HmZ1.js')),
			__memo(() => import('./chunks/114-D6mzkS5-.js')),
			__memo(() => import('./chunks/115-BZLtIg0L.js')),
			__memo(() => import('./chunks/116-baNFKC00.js')),
			__memo(() => import('./chunks/117-DMoWm3r3.js')),
			__memo(() => import('./chunks/118-dqL33A2b.js')),
			__memo(() => import('./chunks/119-BCOGmiBN.js')),
			__memo(() => import('./chunks/120-BOcDp-wm.js')),
			__memo(() => import('./chunks/121-DZg-Otyx.js')),
			__memo(() => import('./chunks/122-DRPN_cZA.js')),
			__memo(() => import('./chunks/123-CFUpbx2n.js')),
			__memo(() => import('./chunks/124-BkPchiXi.js')),
			__memo(() => import('./chunks/125-DPhK66T8.js')),
			__memo(() => import('./chunks/126-BgOUxSxf.js')),
			__memo(() => import('./chunks/127-CqtOfKBo.js')),
			__memo(() => import('./chunks/128-CFn3DO9c.js')),
			__memo(() => import('./chunks/129-D_kWx95p.js')),
			__memo(() => import('./chunks/130-oRjr1Ue7.js')),
			__memo(() => import('./chunks/131-CXXMRdWF.js')),
			__memo(() => import('./chunks/132-Bd6C5nIu.js')),
			__memo(() => import('./chunks/133-D2m020au.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(app)/admin/access",
				pattern: /^\/admin\/access\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(app)/admin/access/[apiName]",
				pattern: /^\/admin\/access\/([^/]+?)\/?$/,
				params: [{"name":"apiName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(app)/admin/alerts",
				pattern: /^\/admin\/alerts\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(app)/admin/debug",
				pattern: /^\/admin\/debug\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/admin/doors",
				pattern: /^\/admin\/doors\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(app)/admin/doors/edit/[slug]",
				pattern: /^\/admin\/doors\/edit\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(app)/admin/email-alias",
				pattern: /^\/admin\/email-alias\/?$/,
				params: [],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(app)/admin/email-alias/[email]",
				pattern: /^\/admin\/email-alias\/([^/]+?)\/?$/,
				params: [{"name":"email","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(app)/admin/links",
				pattern: /^\/admin\/links\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(app)/admin/minio",
				pattern: /^\/admin\/minio\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(app)/admin/settings",
				pattern: /^\/admin\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(app)/api/alarm",
				pattern: /^\/api\/alarm\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CTLZSjG7.js'))
			},
			{
				id: "/(app)/api/events",
				pattern: /^\/api\/events\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Cj_KrXXZ.js'))
			},
			{
				id: "/(app)/api/home",
				pattern: /^\/api\/home\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-IOBNjZbz.js'))
			},
			{
				id: "/(app)/api/mail/alias",
				pattern: /^\/api\/mail\/alias\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D7VYs3X0.js'))
			},
			{
				id: "/(app)/api/mail/alias/senders",
				pattern: /^\/api\/mail\/alias\/senders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C3--R6iw.js'))
			},
			{
				id: "/(app)/api/members",
				pattern: /^\/api\/members\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Cgpnx6Xs.js'))
			},
			{
				id: "/(app)/api/members/phadders",
				pattern: /^\/api\/members\/phadders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DKpKmGOw.js'))
			},
			{
				id: "/(app)/api/notifications/my",
				pattern: /^\/api\/notifications\/my\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D_Pz_356.js'))
			},
			{
				id: "/(app)/api/notifications/uploadToken",
				pattern: /^\/api\/notifications\/uploadToken\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-7gMlHW7G.js'))
			},
			{
				id: "/api/openapi.json",
				pattern: /^\/api\/openapi\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-KT_UZB4S.js'))
			},
			{
				id: "/(app)/api/pdf/[...path]",
				pattern: /^\/api\/pdf(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CW_x45-o.js'))
			},
			{
				id: "/(app)/api/search",
				pattern: /^\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BYO4GQkq.js'))
			},
			{
				id: "/(app)/api/stripe/webhooks",
				pattern: /^\/api\/stripe\/webhooks\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B-BUldJm.js'))
			},
			{
				id: "/(app)/app/account",
				pattern: /^\/app\/account\/?$/,
				params: [],
				page: { layouts: [0,2,5,], errors: [1,,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(app)/app/home",
				pattern: /^\/app\/home\/?$/,
				params: [],
				page: { layouts: [0,2,5,], errors: [1,,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(app)/board",
				pattern: /^\/board\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(app)/booking",
				pattern: /^\/booking\/?$/,
				params: [],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(app)/booking/admin",
				pattern: /^\/booking\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(app)/booking/admin/[id]",
				pattern: /^\/booking\/admin\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(app)/booking/create",
				pattern: /^\/booking\/create\/?$/,
				params: [],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(app)/booking/[id]/edit",
				pattern: /^\/booking\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,7,], errors: [1,,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(app)/committees",
				pattern: /^\/committees\/?$/,
				params: [],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(app)/committees/cafe",
				pattern: /^\/committees\/cafe\/?$/,
				params: [],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(app)/committees/nollu",
				pattern: /^\/committees\/nollu\/?$/,
				params: [],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(app)/committees/nollu/groups",
				pattern: /^\/committees\/nollu\/groups\/?$/,
				params: [],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(app)/committees/[shortName]",
				pattern: /^\/committees\/([^/]+?)\/?$/,
				params: [{"name":"shortName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(app)/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(app)/documents",
				pattern: /^\/documents\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(app)/documents/governing",
				pattern: /^\/documents\/governing\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(app)/documents/governing/new",
				pattern: /^\/documents\/governing\/new\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(app)/documents/governing/[id]/edit",
				pattern: /^\/documents\/governing\/([^/]+?)\/edit\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(app)/documents/requirements",
				pattern: /^\/documents\/requirements\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(app)/documents/upload",
				pattern: /^\/documents\/upload\/?$/,
				params: [],
				page: { layouts: [0,2,9,], errors: [1,,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(app)/elections",
				pattern: /^\/elections\/?$/,
				params: [],
				page: { layouts: [0,2,10,], errors: [1,,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(app)/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(app)/events/all-events",
				pattern: /^\/events\/all-events\/?$/,
				params: [],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(app)/events/calendar",
				pattern: /^\/events\/calendar\/?$/,
				params: [],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(app)/events/create",
				pattern: /^\/events\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(app)/events/id/[id]",
				pattern: /^\/events\/id\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BjZywlWU.js'))
			},
			{
				id: "/(app)/events/subscribe",
				pattern: /^\/events\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BMUvsfm0.js'))
			},
			{
				id: "/(app)/events/tv",
				pattern: /^\/events\/tv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(app)/events/[slug]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(app)/events/[slug]/edit",
				pattern: /^\/events\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,12,], errors: [1,,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(app)/info/[slug]",
				pattern: /^\/info\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(app)/info/[slug]/edit",
				pattern: /^\/info\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(app)/medals",
				pattern: /^\/medals\/?$/,
				params: [],
				page: { layouts: [0,2,13,], errors: [1,,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(app)/medals/download-csv",
				pattern: /^\/medals\/download-csv\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-k4L42mi9.js'))
			},
			{
				id: "/(app)/members",
				pattern: /^\/members\/?$/,
				params: [],
				page: { layouts: [0,2,14,], errors: [1,,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(app)/members/me",
				pattern: /^\/members\/me\/?$/,
				params: [],
				page: { layouts: [0,2,14,], errors: [1,,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(app)/members/[studentId]",
				pattern: /^\/members\/([^/]+?)\/?$/,
				params: [{"name":"studentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,14,], errors: [1,,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(app)/members/[studentId]/edit-bio",
				pattern: /^\/members\/([^/]+?)\/edit-bio\/?$/,
				params: [{"name":"studentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,14,], errors: [1,,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(app)/members/[studentId]/profile-picture",
				pattern: /^\/members\/([^/]+?)\/profile-picture\/?$/,
				params: [{"name":"studentId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,14,], errors: [1,,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/native-app-router",
				pattern: /^\/native-app-router\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 133 },
				endpoint: null
			},
			{
				id: "/(app)/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,2,15,], errors: [1,,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(app)/news/create",
				pattern: /^\/news\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(app)/news/tags",
				pattern: /^\/news\/tags\/?$/,
				params: [],
				page: { layouts: [0,2,15,], errors: [1,,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(app)/news/tv",
				pattern: /^\/news\/tv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(app)/news/[slug]",
				pattern: /^\/news\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,15,], errors: [1,,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(app)/news/[slug]/edit",
				pattern: /^\/news\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/(index)",
				pattern: /^\/nolla\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/boende",
				pattern: /^\/nolla\/boende\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/nationer",
				pattern: /^\/nolla\/nationer\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/nollning",
				pattern: /^\/nolla\/nollning\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/packing",
				pattern: /^\/nolla\/packing\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/sektionen",
				pattern: /^\/nolla\/sektionen\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/todo",
				pattern: /^\/nolla\/todo\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/wellbeing",
				pattern: /^\/nolla\/wellbeing\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/wordlist",
				pattern: /^\/nolla\/wordlist\/?$/,
				params: [],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/(nollning)/nolla/[...path]",
				pattern: /^\/nolla(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,23,], errors: [1,24,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning",
				pattern: /^\/nollning\/?$/,
				params: [],
				page: { layouts: [0,25,], errors: [1,26,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/events",
				pattern: /^\/nollning\/events\/?$/,
				params: [],
				page: { layouts: [0,25,], errors: [1,26,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/events/subscribe",
				pattern: /^\/nollning\/events\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-A2Nvca-M.js'))
			},
			{
				id: "/(nollning)/nollning/messages",
				pattern: /^\/nollning\/messages\/?$/,
				params: [],
				page: { layouts: [0,25,], errors: [1,26,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/settings",
				pattern: /^\/nollning\/settings\/?$/,
				params: [],
				page: { layouts: [0,25,], errors: [1,26,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/shop/cart",
				pattern: /^\/nollning\/shop\/cart\/?$/,
				params: [],
				page: { layouts: [0,25,27,], errors: [1,26,,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/shop/inventory",
				pattern: /^\/nollning\/shop\/inventory\/?$/,
				params: [],
				page: { layouts: [0,25,27,], errors: [1,26,,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/shop/inventory/[id]",
				pattern: /^\/nollning\/shop\/inventory\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,25,27,], errors: [1,26,,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/shop/success",
				pattern: /^\/nollning\/shop\/success\/?$/,
				params: [],
				page: { layouts: [0,25,27,], errors: [1,26,,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia",
				pattern: /^\/nollning\/wikia\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/dress-codes",
				pattern: /^\/nollning\/wikia\/dress-codes\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/faq",
				pattern: /^\/nollning\/wikia\/faq\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/guild-songs",
				pattern: /^\/nollning\/wikia\/guild-songs\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/literature",
				pattern: /^\/nollning\/wikia\/literature\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/map",
				pattern: /^\/nollning\/wikia\/map\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/sektionen",
				pattern: /^\/nollning\/wikia\/sektionen\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/student-health",
				pattern: /^\/nollning\/wikia\/student-health\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/wordlist",
				pattern: /^\/nollning\/wikia\/wordlist\/?$/,
				params: [],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/wikia/[...path]",
				pattern: /^\/nollning\/wikia(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,25,28,], errors: [1,26,,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/(nollning)/nollning/[...path]",
				pattern: /^\/nollning(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,25,], errors: [1,26,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/(app)/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(app)/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,16,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(app)/positions/[id]",
				pattern: /^\/positions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,17,], errors: [1,,,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(app)/reglemente",
				pattern: /^\/reglemente\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CqtAjgpi.js'))
			},
			{
				id: "/(app)/salto/[door]",
				pattern: /^\/salto\/([^/]+?)\/?$/,
				params: [{"name":"door","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-SO5ZmMJz.js'))
			},
			{
				id: "/(app)/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(app)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,18,], errors: [1,,,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(app)/shop/cart",
				pattern: /^\/shop\/cart\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(app)/shop/inventory",
				pattern: /^\/shop\/inventory\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(app)/shop/inventory/[id]",
				pattern: /^\/shop\/inventory\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(app)/shop/success",
				pattern: /^\/shop\/success\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets",
				pattern: /^\/shop\/tickets\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/create",
				pattern: /^\/shop\/tickets\/create\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/manage",
				pattern: /^\/shop\/tickets\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/[slug]",
				pattern: /^\/shop\/tickets\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/[slug]/edit",
				pattern: /^\/shop\/tickets\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/[slug]/manage",
				pattern: /^\/shop\/tickets\/([^/]+?)\/manage\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,19,], errors: [1,,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(app)/shop/tickets/[slug]/manage/download-csv",
				pattern: /^\/shop\/tickets\/([^/]+?)\/manage\/download-csv\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DYnkbI5t.js'))
			},
			{
				id: "/(app)/songbook",
				pattern: /^\/songbook\/?$/,
				params: [],
				page: { layouts: [0,2,20,], errors: [1,,,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(app)/songbook/create",
				pattern: /^\/songbook\/create\/?$/,
				params: [],
				page: { layouts: [0,2,20,], errors: [1,,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/(app)/songbook/[slug]",
				pattern: /^\/songbook\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,20,21,], errors: [1,,,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(app)/songbook/[slug]/edit",
				pattern: /^\/songbook\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,20,21,], errors: [1,,,,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(app)/stadgar",
				pattern: /^\/stadgar\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DKPPJWKa.js'))
			},
			{
				id: "/(app)/yrka",
				pattern: /^\/yrka\/?$/,
				params: [],
				page: { layouts: [0,2,22,], errors: [1,,,], leaf: 103 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
