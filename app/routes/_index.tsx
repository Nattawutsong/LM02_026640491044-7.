import type { MetaFunction } from "@remix-run/node";
import AppMenu from "./template/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    {<AppMenu />}
    <div className="font-sans">
      {/* <section className="header bg-gray-200 p-3 rounded-xl">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      </section> */}
      <hr className="mb-3"/>
      <section className="bg-gray-200 p-3 rounded-xl">
      <h1 className="text-3xl">ยินดีต้อนรับสู่หน้าหลัก</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <img src="\figures\01.png" width={250} height={250} />
        <li>ชื่อ : ณัฐวุฒิ ทรงอภิวัฒน์กุล</li>
        <li>สาขา : เทคโนโลยีสารสนเทศ</li>
        <li>รหัสนักศึกษา : 026640491044-7</li>
        <li>เบอร์โทร : 0925858725</li>
        <li>
          E-mail : <a href="nattawut.song@rmutto.ac.th">Contact me</a>
        </li>
      </ul>
      </section>
      <hr className="m-3"/>
    </div>
    </>
  );
}