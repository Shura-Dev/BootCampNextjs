"use client"
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/definitions";

import styles from "./Card.module.css";
import { useSession } from "next-auth/react";

const Card = ({ post }: { post: Post }) => {
  const { data: session, status } = useSession();
  console.log(session);
  
  return (
    <div className={styles.container} key={post.id}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt={post.title} fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        { post.subscription === "Free" ?
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        :
        <Link href={`/pricing`}>
        <h1>{post.title}</h1>
      </Link>
        }
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 60) }}
        />
        { post.subscription === "Free" ?
          <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More {post.subscription}
        </Link>
        :
        <Link href={'/pricing'} className={styles.link}>
          Subscription 
        </Link>
        }
      </div>
    </div>
  );
};

export default Card;
