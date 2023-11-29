import { v4 as uuid4 } from "uuid";

const users = [
	{ name: "Kevin Turley", id: uuid4() },
	{ name: "Kati Chivers", id: uuid4() },
	{ name: "Henry Chivers Turley", id: uuid4() },
	{ name: "Zappa", id: uuid4() },
];

export default function TitleBlock() {
	return (
		<div className="text-center m-0 p-3 bg-info text-white">
			<h1>CV Builder</h1>
		</div>
	);
}
