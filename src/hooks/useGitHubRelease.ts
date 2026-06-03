import { useEffect, useState } from "react"

interface ReleaseAsset {
  name: string
  browser_download_url: string
}

interface Release {
  tag_name: string
  assets: ReleaseAsset[]
}

export function useGitHubRelease() {
  const [release, setRelease] = useState<Release | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/Ronak-jain-afk/RE-Invoice/releases/latest")
      .then((res) => res.json())
      .then((data) => setRelease(data))
      .catch((err) => console.error("Error fetching release:", err))
  }, [])

  const exeAsset = release?.assets.find((a) => a.name.endsWith(".exe")) ?? null
  const debAsset = release?.assets.find((a) => a.name.endsWith(".deb")) ?? null

  return { release, exeAsset, debAsset }
}
