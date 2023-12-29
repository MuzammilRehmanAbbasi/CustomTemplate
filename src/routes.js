const routes = [
	{
		path: "",
		pageName: "Auth",
		public: true,
	},
	{
		path: "register",
		pageName: "Registration",
		public: true,
	},
	{
		path: "dashboard",
		pageName: "Dashboard",
		public: false,
	},
	{
		path: "memo",
		pageName: "Memo",
		public: false,
	},
];

export { routes };
