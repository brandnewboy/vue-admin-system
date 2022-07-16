import $request from "@/api/axios";

export function login(data) {
  return $request({
    url: "/sys/login",
    method: "POST",
    data
  });
}
