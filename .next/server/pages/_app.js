"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Box": () => (/* binding */ Box),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(735);
;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
// import "@/styles/globals.css";



const fonts = {
    sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
};
const theme = (0,react_.createTheme)({
    type: "light",
    theme: {
        fonts
    }
});
// import { Content } from "./Content.js"

const Box = (0,react_.styled)("div", {
    boxSizing: "border-box"
});
const collapseItems = [
    "Book a Meeting",
    "Contact Me"
];
function NavigationBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar, {
        isBordered: true,
        variant: "sticky",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Toggle, {
                "aria-label": "toggle navigation",
                showIn: "xs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Brand, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    b: true,
                    color: "inherit",
                    children: "BALLYGOREY"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                hideIn: "xs",
                variant: "underline",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        isActive: true,
                        href: "/about",
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        href: "/calendar",
                        children: "Book a Meeting"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        href: "mailto:collind@vt.edu",
                        children: "Contact Me"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Content, {
                css: {
                    "@xs": {
                        w: "12%",
                        jc: "flex-end"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Dropdown, {
                    placement: "bottom-right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Trigger, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                    bordered: true,
                                    as: "button",
                                    color: "secondary",
                                    size: "md",
                                    src: "https://www.sec.vt.edu/content/dam/sec_vt_edu/headshots/2022-23/CollinDunphy-Profile.jpg"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Dropdown.Menu, {
                            "aria-label": "User menu actions",
                            color: "secondary",
                            onAction: (actionKey)=>console.log({
                                    actionKey
                                }),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Dropdown.Item, {
                                    css: {
                                        height: "$18"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            b: true,
                                            color: "inherit",
                                            css: {
                                                d: "flex"
                                            },
                                            children: "Signed in as"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            b: true,
                                            color: "inherit",
                                            css: {
                                                d: "flex"
                                            },
                                            children: "collind@vt.edu"
                                        })
                                    ]
                                }, "profile"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    withDivider: true,
                                    children: "My Settings"
                                }, "settings"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    children: "Team Settings"
                                }, "team_settings"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    withDivider: true,
                                    children: "Analytics"
                                }, "analytics"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    children: "System"
                                }, "system"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    children: "Configurations"
                                }, "configurations"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    withDivider: true,
                                    children: "Help & Feedback"
                                }, "help_and_feedback"),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Dropdown.Item, {
                                    withDivider: true,
                                    color: "error",
                                    children: "Log Out"
                                }, "logout")
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Collapse, {
                children: collapseItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.CollapseItem, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            color: "inherit",
                            css: {
                                minWidth: "100%"
                            },
                            href: "#",
                            children: item
                        })
                    }, item))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Collapse, {
                children: collapseItems.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.CollapseItem, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            color: "inherit",
                            css: {
                                minWidth: "100%"
                            },
                            href: "#",
                            children: item
                        })
                    }, item))
            })
        ]
    });
}
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((SSRProvider_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
            theme: theme,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                css: {
                    maxW: "100%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                            align: "center",
                            justify: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "\xa9 Copyright Ballygorey Labs LLC"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(108));
module.exports = __webpack_exports__;

})();