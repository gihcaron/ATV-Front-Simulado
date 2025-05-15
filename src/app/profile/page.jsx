"use client";

import Image from "next/image";
import styles from "./profile.module.css";
import { Button, Card, Flex, Typography, Skeleton } from "antd";
import Link from "next/link";

export default function Profile() {
  return (
      <div className={styles.container}>
        
        <Card hoverable className={styles.card}>
            <Flex justify="space-between" >
                <div className={styles.imageContainer}>
                    <Image
                        src="/imagens/Giovanna.jpeg"
                        alt="Profile"
                        fill
                        className={styles.image}
                    />
                </div>

                <Flex vertical align="flex-end" justify="space-around">
                    <div>
                        <Typography.Title level={3}  className={styles.title}>
                            Giovanna Caron 🦄
                        </Typography.Title>

                        <Typography.Title level={5} type="success"  style={{ color: "#b47cfc" }} className={styles.title}>
                            When will u realize, Vienna waits for you.
                        </Typography.Title> 

                        <Typography.Paragraph>
                            Projeto desenvolvido usando:
                        </Typography.Paragraph>

                        <ul className={styles.list}>
                          <li className={styles.listItem}>Axios</li>
                                                    <li className={styles.listItem}>AntD</li>
                                                    <li className={styles.listItem}>SessionStorage</li>
                                                    <li className={styles.listItem}>Toastify</li>
                                                    <li className={styles.listItem}>CSS Modules</li>
                                                    <li className={styles.listItem}>Hook</li>
                                                    <li className={styles.listItem}>PreLoad</li>
                                                    <li className={styles.listItem}>PreFetch</li>
                                                    <li className={styles.listItem}>Link / Next</li>
                                                    <li className={styles.listItem}>Image / Next</li>
                                                    <li className={styles.listItem}>NodeJS</li>
                                                    <li className={styles.listItem}>E muito amor 💖</li>
                        </ul>
                        
                    </div>
                    <Link href="/alunos" prefetch>
                        <Button type="primary"
                        style={{ backgroundColor: "#b47cfc", borderColor: "#b47cfc" }}  >
                        Acessar minha API GET via Alunos
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Card>
            
    </div>
  );
}
