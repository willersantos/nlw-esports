import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AdTable1663708157633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name:'adsTb',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'useVoiceChannel',
                        type: 'varchar',
                    },
                    {
                        name: 'discord',
                        type: 'varchar',
                    },
                    {
                        name: 'weekDays',
                        type: 'varchar',
                    },
                    {
                        name: 'yearsPlaying',
                        type: 'integer',
                    },
                    {
                        name: 'hourStart',
                        type: 'integer',
                    },
                    {
                        name: 'hourEnd',
                        type: 'integer',
                    },
                    {
                        name: 'gameId',
                        type: 'uuid',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys:[
                    {
                        name: 'fkGamesTbAdsTb',
                        referencedTableName: 'gamesTb',
                        referencedColumnNames: ['id'],
                        columnNames: ['gameId'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adsTb');
    }
}
