/*
 * Copyright 2020 Bitnine Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CypherService = require("../services/cypherService");
const sessionService = require("../services/sessionService");

class CypherController {
    async executeCypher(req, res) {
        const connectorService = sessionService.get(req.sessionID);
        if (connectorService.isConnected()) {
            const cypherService = new CypherService(
                connectorService.agensDatabaseHelper
            );
            const data = await cypherService.executeCypher(req.body.cmd);
            res.status(200).json(data).end();
        } else {
            throw new Error("Not connected");
        }
    }
}

module.exports = CypherController;
