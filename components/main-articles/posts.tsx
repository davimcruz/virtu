import { Post } from "@/types/types"
import Image from "next/image"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { ArrowRight } from "lucide-react"

interface PostsProps {
  posts: Post[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-6 h-full md:px-6 pb-12 shadow-sm md:shadow-xl rounded-lg">
      <div className="flex-col">
        <h1 className="text-black font-bold text-xl md:text-3xl px-4 md:px-6 pt-2 md:pt-6">
          Artigos Recentes
        </h1>
        <p className="text-zinc-600 font-normal text-xs md:pt-2 px-4 md:px-6">
          Publicações mais recentes por ordem de criação
        </p>
      </div>
      <Separator className="w-full" />

      {posts.map((post, index) => (
        <div key={index} className="flex items-start -mt-4 md:m-0 p-4 md:p-6 shadow-md rounded-lg">
          <div className="flex-1">
            <h1 className="text-texto text-lg md:text-xl font-bold">{post.title}</h1>
            <p className="text-zinc-500 text-sm md:max-w-[75%] mt-4 font-normal text-justify line-clamp-3">
              {post.body}
            </p>

            <Separator className="md:max-w-[75%] mt-4 -mb-4" />

            <div className="flex justify-between items-center mt-8 max-w-[75%]">
              <Button className="bg-texto2 " variant={"default"}>
                Ler todo Artigo
                <ArrowRight className="w-5 ml-2" />
              </Button>

              <p className="text-zinc-600 font-normal text-xs hidden xl:block ml-12">
                {post.creationDate} - Publicado por <b>{post.authorName}</b>
              </p>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="max-w-[75%] -ml-24 mr-24 hidden 2xl:block"
          />

          <div className="ml-4 w-[20%] relative hidden md:block ">
            <div className="aspect-[4/3] w-full h-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts
