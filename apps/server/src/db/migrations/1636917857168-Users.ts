import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

import { RoleEnum } from '../../user/entities/user.entity';
import { typePartWorkout } from '../../part_workout/entities/part_workout.entity';

export class Users1636917857168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'token',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'role',
            type: 'enum',
            enum: [RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.Owner],
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'contest',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'gps_coordinates',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'workout',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'contest_id',
            type: 'uuid',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'part_workout',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'workout_id',
            type: 'uuid',
          },
          {
            name: 'type',
            type: 'enum',
            enum: [
              typePartWorkout.FORTIME,
              typePartWorkout.AMRAP,
              typePartWorkout.EMOM,
              typePartWorkout.INTERVAL,
              typePartWorkout.TABATA,
            ],
          },
          {
            name: 'duration',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'age_min',
            type: 'int',
          },
          {
            name: 'age_max',
            type: 'int',
          },
          {
            name: 'nb_team_max',
            type: 'int',
          },
          //ajouter une colonne pour le nombre de personne par équipe
          {
            name: 'nb_person_max_by_team',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'contest_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'exercise',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'part_workout_id',
            type: 'uuid',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'team',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'contest_id',
            type: 'uuid',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'team_user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'team_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
    //écrit les clés étrangères de team_user
    await queryRunner.createForeignKey(
      'team_user',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'team_user',
      new TableForeignKey({
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'team',
        onDelete: 'CASCADE',
      }),
    );
    //écrit les clés étrangères de team
    await queryRunner.createForeignKey(
      'team',
      new TableForeignKey({
        columnNames: ['contest_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contest',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'team',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
      }),
    );
    //écrit les clés étrangères de exercise
    await queryRunner.createForeignKey(
      'exercise',
      new TableForeignKey({
        columnNames: ['part_workout_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'part_workout',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'exercise',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
      }),
    );
    //écrit les clés étrangères de category
    await queryRunner.createForeignKey(
      'category',
      new TableForeignKey({
        columnNames: ['contest_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contest',
        onDelete: 'CASCADE',
      }),
    );
    //écrit les clés étrangères de part_workout
    await queryRunner.createForeignKey(
      'part_workout',
      new TableForeignKey({
        columnNames: ['workout_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'workout',
        onDelete: 'CASCADE',
      }),
    );
    //écrit les clés étrangères de workout
    await queryRunner.createForeignKey(
      'workout',
      new TableForeignKey({
        columnNames: ['contest_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contest',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.dropTable('contest');
    await queryRunner.dropTable('workout');
    await queryRunner.dropTable('part_workout');
    await queryRunner.dropTable('category');
    await queryRunner.dropTable('exercise');
    await queryRunner.dropTable('team');
    await queryRunner.dropTable('team_user');
  }
}
